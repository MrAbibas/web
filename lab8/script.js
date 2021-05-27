function getMinValue(){
	var arr,  i,  l,  min;
	n1 = document.getElementById('n1').value;
	n2 = document.getElementById('n2').value;
	n3 = document.getElementById('n3').value;
	n4 = document.getElementById('n4').value;
arr = [n1, n2, n3, n4];
min = Number.POSITIVE_INFINITY;
for (i = 0, l = arr.length; i < l; i++) {
  min = Math.min(min, arr[i]);
}
alert("Наименьшее число = " + min);
}