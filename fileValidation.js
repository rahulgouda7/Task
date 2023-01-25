function page1Validation() {
    var x = document.myForm
    var at = x.Email.value.indexOf("@");
    var dot = x.Email.value.lastIndexOf(".");
    if (x.f_Name.value == "") {
        alert("Please provide First Name!!");
        x.f_Name.focus();
        return false;
    }
    if (x.f_Name.value.length <= 2) {
        alert("First name should  be atleast 3 characters!!");
        x.f_Name.focus();
        return false;
    }
    if (x.l_Name.value == "") {

        alert("Please provide Last Name!!");
        x.l_Name.focus();
        return false;
    }
    if (x.l_Name.value.length <= 2) {
        alert("Last name should be atleast 3 characters!!");
        x.l_Name.focus();
        return false;
    }
    if (x.DOB.value == "") {

        alert("Please provide DOB!!");
        x.DOB.focus();
        return false;
    }
    if (x.Email.value == "") {

        alert("Please provide an Email!!");
        x.Email.focus();
        return false;
    }
    if (at < 1 || dot < at + 2 || dot + 2 >= x.Email.value.length) {

        alert("Not a valid Email!!");
        x.Email.focus();
        return false;
    }
    if (x.father_fname.value == "") {

        alert(" Provide Father's First Name!!");
        x.father_fname.focus();
        return false;
    }
    if (x.father_lname.value == "") {

        alert(" Provide Father's Last Name!!");
        x.father_lname.focus();
        return false;
    }
    if (x.mother_fname.value == "") {

        alert(" Provide Mother's First Name !");
        x.mother_fname.focus();
        return false;
    }
    if (x.mother_lname.value == "") {

        alert(" Provide Mother's Last Name !");
        x.mother_lname.focus();
        return false;
    }
    if (x.gender.value=='') {
        alert(" Provide Gender !");
        return false;
    }
    if (x.nation.value == "") {

        alert(" Provide Nationality !");
        x.nation.focus();
        return false;
    }
    if (x.add.value == "") {

        alert(" Provide Address !");
        x.add.focus();
        return false;
    }
    if (x.city.value == "") {

        alert(" Provide City Name!");
        x.city.focus();
        return false;
    }
    if (x.contry.value == "") {

        alert(" Provide Country Name !");
        x.contry.focus();
        return false;
    }
    if (x.mobile.value == "") {

        alert("Please provide mobile number !!");
        x.mobile.focus();
        return false;
    }
    if (isNaN(x.mobile.value) || x.mobile.value.length != 10) {
        alert("Provide Valid Mobile Number!");
        x.mobile.focus();
        return false;

    }
    return true;
}
function page2Validation() {
    var x = document.myForm
    if (x.h_iname.value == "") {
        alert("Provide Institution Name");
        x.h_iname.focus();
        return false;

    }
    if (x.h_board.value == "") {
        alert("Provide HSC Board Name");
        x.h_board.focus();
        return false;

    }
    if (x.h_per.value == "") {
        alert("Provide Percentage(%)");
        x.h_per.focus();
        return false;

    }
    if (isNaN(x.h_per.value)) {
        alert("Provide valid Percentage(%)");
        x.h_per.focus();
        return false;

    }
    if (x.h_per.value < 0 || x.h_per.value > 100) {
        alert("Provide valid Percentage(%)");
        x.h_per.focus();
        return false;

    }
    if (x.s_iname.value == "") {
        alert("Provide Institution Name");
        x.s_iname.focus();
        return false;

    }
    if (x.s_board.value == "") {
        alert("Provide SSC Board Name");
        x.s_board.focus();
        return false;

    }
    if (x.s_per.value == "") {
        alert("Provide Percentage(%)");
        x.s_per.focus();
        return false;

    }
    if (isNaN(x.s_per.value)) {
        alert("Provide valid Percentage(%)");
        x.s_per.focus();
        return false;

    }
    if (x.s_per.value < 0 || x.s_per.value > 100) {
        alert("Provide valid Percentage(%)");
        x.s_per.focus();
        return false;

    }
    if (x.curr_pur.value == "") {
        alert("Fill currently pursuing field!!");
        x.curr_pur.focus();
        return false;

    }
    if (x.current_iname.value == "") {
        alert("Provide Institution Name");
        x.current_iname.focus();
        return false;

    }
    if (x.ovr_per.value == "") {
        alert("Provide Percentage(%)");
        x.ovr_per.focus();
        return false;

    }
    if (isNaN(x.ovr_per.value)) {
        alert("Provide valid Percentage(%)");
        x.s_per.focus();
        return false;

    }
    if (x.ovr_per.value.length > 3 || x.ovr_per.value > 100) {
        alert("Provide valid Percentage(%)");
        x.ovr_per.focus();
        return false;

    }
    else if (x.bck.value=="") {

        alert("please fill the backlog field!");
        x.bck.focus();
        return false;
    }
    return (true);

}
function page3Validation(fileName, size) {
    if (fileName == "file1") {
        var fileInput = document.getElementById('file1');
        var filePath = fileInput.value;
        // Allowing file type
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type !! allowedType is jpg,png and jpeg');
            fileInput.value = '';
            return false;
        }
        const fi = document.getElementById('file1');
        // Check if any file is selected.
        if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {
                const fsize = fi.files.item(i).size;
                const file = Math.round((fsize / 1024));
                // The size of the file.
                if (file >= 4096) {
                    alert("File too Big, please select a file less than 4mb");
                }
                else {
                    document.getElementById('size1').innerHTML = '<b>' + file + '</b> KB';
                }
            }
        }
    }
    else {
        var fileInput = document.getElementById(fileName);
        var filePath = fileInput.value;
        // Allowing file type
        var allowedExtensions = /(\.pdf|\.docs|\.png|\.jpeg|\.jpg)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type allowed type is pdf,docs');
            fileInput.value = '';
            return false;
        }
        const fi = document.getElementById(fileName);
        // Check if any file is selected.
        if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {
                const fsize = fi.files.item(i).size;
                const file = Math.round((fsize / 1024));
                // The size of the file.
                if (file >= 4096) {
                    alert("File too Big, please select a file less than 4mb");
                }
                else {
                    document.getElementById(size).innerHTML = '<b>' + file + '</b> KB';
                }
            }
        }
    }

}