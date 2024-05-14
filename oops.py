# OOPS in python
class Student:
    roll_no = None
    name = None
    def __init__(self,r,n) -> None:
        self.roll_no = r
        self.name = n
    def __str__(self) -> str:
        return self.name
    def show(self):
        res = "The name is {} and roll no is {}".format(self.name,self.roll_no)
        print(res)
obj1 = Student(12,"annu")
print("The name of the student is {}".format(obj1.__class__.name)) # accessing class variables
obj1.show()
# polymorphism
class Bird:
    def __init__(self) -> None:
        self.__c = "red"
    def intro(self):
        print("This is Bird intro")
    def flight(self):
        print("Most of the birds")
    def show(self):
        print(self.__c)
class sparrow(Bird):
    def flight(self):
        print("Sparrow class")
class ostrich(Bird):
    def flight(self):
        print("Ostrich class")
obj2 = Bird()
obj3 = sparrow()
obj4 = ostrich()
obj2.intro()
obj2.flight()
obj3.flight()
obj4.flight()
obj2.show()
# function overloading 
class shape:
    def shape_f(self,a,b=None,c=None):
        if a != None and b == None and c == None:
            print("Square")
        elif a != None and b != None and c == None:
            print("Rectangle")
        elif a != None and b != None and c != None:
            print("Triangle")
        else:
            print("give the")