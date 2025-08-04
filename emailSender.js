export async function sendFormData(formData) {
    const SERVICE_ID = 'service_4fdx4ih'
    const TEMPLATE_ID = 'template_Izpnnae'


    const templateParams = {
        name: formData.get("name"),
        email: formData.get("email"),
        age: formData.get("number"),
        option: formData.getAll("dropodown").join(","),
        comments: formData.get("comments"),
    };

    return  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
}