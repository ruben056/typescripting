// enum = a type to name a set of numeric values

// by default starting at 0
enum Day {MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY};
console.log(Day.MONDAY); // 0
console.log(Day.TUESDAY); //1 ...

//or set a starting nr:
enum Color {RED = 10, BLUE, GREEN};
console.log(Color.RED);//10
console.log(Color.BLUE); // 11 ...

// no numbers:
enum MiType {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  PDF = 'application/pdf'
}
console.log(MiType.JPEG);
