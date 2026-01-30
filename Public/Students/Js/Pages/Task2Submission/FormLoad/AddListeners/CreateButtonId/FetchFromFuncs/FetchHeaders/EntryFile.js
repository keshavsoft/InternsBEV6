import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    var formData = new FormData(jVarLocalForm);

    formData.set("Mobile", jFLocalForTwilio());
    const formObject = Object.fromEntries(formData.entries());
    debugger;
    KeysJson.body = JSON.stringify(getFormDataAsObject(jVarLocalForm));

    return KeysJson;
};

let jFLocalForTwilio = () => {
    const phoneInputField = document.getElementById('MobileId');
    const phoneInput = window.intlTelInputGlobals.getInstance(phoneInputField);
    const phoneNumber = phoneInput.getNumber();

    return phoneNumber;
};

function getFormDataAsObject(form) {
    const formData = new FormData(form);
    const formObject = {};

    for (const [key, value] of formData.entries()) {
        if (Object.hasOwn(formObject, key)) {
            if (!Array.isArray(formObject[key])) {
                // Convert existing value to an array and add the new value
                formObject[key] = [formObject[key], value];
            } else {
                // Push the new value to the existing array
                formObject[key].push(value);
            }
        } else {
            // Add the initial key-value pair
            formObject[key] = value;
        }
    }
    return formObject;
}

// Usage:
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const data = getFormDataAsObject(event.target);
//     console.log(data);
// });

export { StartFunc };