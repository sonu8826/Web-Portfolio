var readProductDetails = () => {
    var pDetails = {
        id: $("#id").val(),
        title: $("#title").val(),
        price: parseInt($("#price").val()),
        discountPercent: parseInt($("#discountPercent").val()),
        description: $("#description").val(),
        mainImage: $("#mainImage").val(),
        imageList: [],
        isLimitedDeal: true,
        category: $("#category").val()
    };
    console.log(pDetails);

    axios.post("/add/newProductDetails", pDetails).then((result) => {
        console.log(result);
        $("#rblock").text("Inserted Successfly")
    }).catch((err) => {
        console.log("error while inserting");
    });
}

var uploadDetails = () => {
    var uploadFile = $("input[name=prodImage]")[0].files[0];
    // console.log(uploadFile.type);
    let formData = new FormData();
    formData.append("file", uploadFile);

    axios.post('/add/product/image',formData, {
        headers: {
            "Content-Type":"multipart/form-data",
        }
    }).then((response) => {
        console.log("File got uploaded");
    }).error((err) => {
       
    });
}