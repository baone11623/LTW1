export const samePhoto = async (e, setFile, setImage) => {
  setFile(e.target.files[0]);
  const fileReader = new FileReader();
  fileReader.readAsDataURL(e.target.files[0]);

  fileReader.onload = () => {
    setImage(fileReader.result);
  };

  fileReader.onerror = (error) => {
    console.log("error :", error);
  };
};

export const convertBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
