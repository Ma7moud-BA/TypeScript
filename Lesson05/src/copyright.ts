//Original
// const year=document.getElementById('year')

// const thisYear=new Date().getFullYear()

// year.setAttribute("datetime",thisYear)
// year.textContent=thisYear

//1st variation
const year = document.getElementById("year") as HTMLSpanElement;

const thisYear: string = new Date().getFullYear().toString();
console.log(year);
// year.setAttribute("dateTime", thisYear);
if (year) {
	year.innerHTML = thisYear;
}
