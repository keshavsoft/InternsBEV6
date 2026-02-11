const StartFunc = ({ inFetchResult }) => {
    // console.log("inFetchResult : ", inFetchResult);
    const jVarLocalMessage = "Task1 already submitted";

    if (confirm(jVarLocalMessage)) {
        var url = "sms:+91-984-816-3021";
        var win = window.open(url, '_blank');  ///similar to above solution
        win.focus();
    };
};

export { StartFunc };