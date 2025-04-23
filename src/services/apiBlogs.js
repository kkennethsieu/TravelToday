import supabase from "./supabase";

export async function getBlogs() {
  const { data: blogs, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.log(error);
    throw new Error("Error loading");
  }
  return { blogs };
}

export async function getBlogById(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Error loading blog");
  }

  return data;
}

export async function addBlog(newBlog, imgFile) {
  if (!imgFile) throw new Error("Image file is required.");

  // 1. Upload image to Supabase Storage
  const fileName = `${Date.now()}-${imgFile.name}`;
  const { error: uploadError } = await supabase.storage
    .from("images") // change if your bucket name is different
    .upload(fileName, imgFile);

  if (uploadError) {
    console.error("Upload error:", uploadError);
    throw new Error("Failed to upload image.");
  }

  // 2. Get public image URL
  const { data: urlData, error: urlError } = supabase.storage
    .from("images")
    .getPublicUrl(fileName);

  if (urlError || !urlData?.publicUrl) {
    console.error("URL error:", urlError);
    throw new Error("Failed to retrieve public URL.");
  }

  const publicUrl = urlData.publicUrl;

  // 3. Insert blog data into 'blogs' table
  const { data, error: insertError } = await supabase
    .from("blogs")
    .insert([{ ...newBlog, img: publicUrl }])
    .select();

  console.log(data);
  if (insertError) {
    console.error("Insert error:", insertError);
    throw new Error("Error adding blog.");
  }

  return data;
}

export async function deleteBlog(id) {
  const { data, error } = await supabase.from("blogs").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Error deleting blog");
  }

  return data;
}
