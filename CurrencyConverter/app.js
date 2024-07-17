

var countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
};

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

var dropdowns = document.querySelectorAll(".dropdown select");
var from = document.querySelector(".dropdown select");
var to = document.querySelector("#to select");
var toVlue;
var fromValue;
// console.log(countryList);
for (let select of dropdowns) {
    for (code in countryList) {
        // console.log(code, countryList[code]);
        var newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name=== "from" && code ==="USD"){
            newOption.selected = true;
        }
        if(select.name=== "to" && code ==="INR"){
            newOption.selected = true;
        }
        select.appendChild(newOption);
    }
    select.addEventListener("change",(eve)=>{
        updateFlag(eve.target)
    })
}

const updateFlag =(element) => {
    // console.log(element)
    let currCode = element.value;
    // console.log(currCode)
    let countryCode = countryList[currCode];
    // console.log(countryCode)
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

 var getExchangeRate = async() => {
    // alert("Listning");
    var userValue = document.querySelector("#amount").value;
    //  var URL = `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    var URL = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_WMSq2gr3Fr0BHC6WTxWtQHvFqKg1Kt9okYVAqWVH&currencies`;

    let response = await fetch(URL);
    let data = await response.json();
    for (let key in data){
        // console.log(key, data[key])
        for(let value in data[key]){
        //   console.log(data[key][value])
        // console.log(value);
        if(value === to.value){
            // console.log("to = "+data[key][value])
            toVlue = data[key][value];
            // document.querySelector("#Result").innerHTML = data[key][value] * userValue;
        }
        if(value === from.value){
            // console.log( 'from = '+ data[key][value])
            fromValue = data[key][value];
        }
        } 
    }
    var finalValue = fromValue * toVlue * userValue;
    console.log(finalValue)
    document.querySelector("#Result").innerHTML = finalValue;
}

// console.log(toVlue,fromValue)