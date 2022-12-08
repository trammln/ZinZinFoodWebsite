function TinhgiaVanchuyen(a){
    if (a == "Lấy hàng tại kho")
        return 0;
    else if (a == "Giao hàng trong TP HCM")
        return 15000;
    else if (a == "Giao hàng trên toàn quốc")
        return 20000;
}

function TinhGiamgia(a, draftsum){
    var giatri = 0;
    switch (a) {
        case "VC0":
            giatri = 0;
            break; 
        case "VC1":
            giatri = 10000;
            break; 
        case "VC2":
            giatri = 20000;
            break;
        case "VC3":
            giatri = 30000;
            break;
        case "VC4":
            giatri = 0.1*draftsum;
            break;
        case "VC5":
            giatri = 0.2*draftsum;
            break;
        case "VC6":
            giatri = 0.3*draftsum;
            break;
        default: giatri = 0;                  
    }
    return giatri;
}

function TinhTongTien(draft,giamgia,vanchuyen){
    var thanhtien = draft - giamgia + vanchuyen;
    return thanhtien;
}
