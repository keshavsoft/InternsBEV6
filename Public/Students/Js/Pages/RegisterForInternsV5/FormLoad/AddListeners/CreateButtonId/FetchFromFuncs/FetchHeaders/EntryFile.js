import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = async ({ inGps }) => {
    const jVarLocalGpsCoords = inGps;

    let jVarLocalForm = document.getElementById("FormId");
    var formData = new FormData(jVarLocalForm);

    formData.append("image", document.getElementById('formFile').files[0]);
    formData.set("Mobile", jFLocalForTwilio());
    formData.set("Intern2025", true);
    formData.set("gpsLat", jVarLocalGpsCoords.gpsLat);
    formData.set("gpsLng", jVarLocalGpsCoords.gpsLng);
    formData.set("gpsAccuracy", jVarLocalGpsCoords.gpsAccuracy);

    KeysJson.body = formData;

    return await KeysJson;
};

let jFLocalForTwilio = () => {
    const phoneInputField = document.getElementById('MobileId');
    const phoneInput = window.intlTelInputGlobals.getInstance(phoneInputField);
    const phoneNumber = phoneInput.getNumber();

    return phoneNumber;
};

export { StartFunc };