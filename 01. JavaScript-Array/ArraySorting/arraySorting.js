// Declare Variables and Array:

var arr = [99, 77, 88, 66, 44, 33, 22, 11, 55];
var x, y, z;

// Before Sorting:
document.write("Before Sorted: <br>");

// Display unsorted array:

for(x = 0; x < arr.length; x++){
     arr[x];
    document.write(arr[x] + "<br>");
}

// Sorting code: 

for (x = 0; x < arr.length; x++) {
    for (y = 0; y < arr.length - 1; y++) {
        if(arr[y] > arr[y+1]) {
            z = arr[y];
            arr[y] = arr[y+1];
            arr[y+1] = z;
        }
    }
}

document.write("<br>After Sorted: <br>");
// Display sorted array:
for(x = 0; x < arr.length; x++) {
    arr[x];
    document.write(arr[x] + "<br>");
}