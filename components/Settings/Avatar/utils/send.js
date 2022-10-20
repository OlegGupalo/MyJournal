export const handleSubmit = (formData, inputFile, setState) => {
    console.log(inputFile.files)
    formData.append("image", inputFile.files[0])
    console.log(formData)
    fetch('http://localhost:4200/files', {
        method: 'post',
        body: formData
    })
    formData.delete("image")
};