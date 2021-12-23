class Man:
    def __init__(self, name, last_name, sex) -> None:
        self.name = name
        self.last_name = last_name
        self.sex = sex

class Trap(Man):
    def __init__(self, name, last_name, sex) -> None:
        super().__init__(name, last_name, sex)
        self.sex = 'Transgender'

trap_1 = Trap('taissia', 'jackson', 'male')
print(trap_1.sex)