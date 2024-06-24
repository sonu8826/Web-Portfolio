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
        
    });
}