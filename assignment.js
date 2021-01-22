//Function 1:  kilometer to Meter Convert 

function kilometerToMeter(km) {
    if (km <= 0 || typeof km != 'number') {
        return 'Enter a Valid Distance';  //Error Message
    }
    else {
        var convertMeter = (km * 1000); //Kiliometer to meter value convart
        return convertMeter;
    };
};




//Function 2: Budget Calculator

function budgetCalculator(watch, phone, leptop) {
    if (watch < 0 || phone < 0 || leptop < 0 || typeof watch != 'number' || typeof phone != 'number' || typeof leptop != 'number') {
        return 'Enter a valid Product value'; //Error Message
    }
    else {
        var watchCostTotal = watch * 50; //Watch Cost Count
        var phoneCostTotal = phone * 100;  //Phone Cost Count
        var leptopCostTotal = leptop * 500;  //Leptop Cost Count

        var totalCost = watchCostTotal + phoneCostTotal + leptopCostTotal;  //Total Product Cost Count
        return totalCost;
    };
};




//Function 3: Hotel Cost

function hotelCost(days) {
    if (days < 0 || typeof days !== 'number') {
        return 'Enter a Valid Days Number'; //Error Message
    }
    else if (days <= 10) {
        return days * 100;  // Befor 10 Days total hotel cost
    }
    else if (days <= 20) {
        firstTenDaysCost = 10 * 100;    //First 10 Days total cost
        remainingDaysCost = (days - 10) * 80;   //Remaining days total cost
        totalCost = firstTenDaysCost + remainingDaysCost;   // Befor 20 days Total cost
        return totalCost;
    }
    else {
        firstTenDaysCost = 10 * 100;    //First 10 Days total cost
        secondTenDaysCost = 10 * 80;    //Second 10 Days Total cost
        remainingDaysCost = (days - 20) * 50;   //Remaining days total cost
        totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost; //Total Days cost if days greater than 20 days
        return totalCost;
    };
};





//Function 4: Mega Friend

function megaFriend(arr) {
    if (arr == '' || typeof arr != 'object' || typeof arr[0] !== 'string') {

        return 'Enter Valid Friends Name';   //Error Message
    }
    else {
        var largestName = '';
        for (var i = 0; i < arr.length; i++) {
            var tempName = arr[i];
            if (tempName.length > largestName.length) {     //String length Compare
                largestName = tempName;
            };
        };
        return largestName;
    };
};

