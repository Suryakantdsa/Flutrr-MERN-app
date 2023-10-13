export const useCloudinaryUpload = async (imgFile) => {
    const data = new FormData();
    data.append("file", imgFile);
    data.append("upload_preset", "movieapppreset");
    data.append("cloud_name","dcyjso2f2");
  
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dcyjso2f2/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const result = await response.json();
      return result.secure_url;
    } catch (error) {
      console.log(error);
      return null; 
    }
  };