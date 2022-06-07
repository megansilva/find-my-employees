INSERT INTO department (name)
    VALUES
        ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
    VALUES
        ("Salesperson", 70000, 1),
        ("Lead Engineer", 105000, 2),
        ("Engineer", 95000, 2),
        ("Account Manager", 90000, 3),
        ("Accountant", 85000, 3),
        ("Lawyer", 110000, 4),
        ("Legal Team", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  
        ("Jane", "Doe", 1, NOT NULL),
        ("Lily", "Right", 2, 1),
        ("Ashley", "Can", 3, NOT NULL),
        ("Matt", "Stevens", 4, 3),
        ("Kyle", "Bern", 5, NOT NULL),
        ("Lila", "Reud", 6, 5),
        ("Martha", "Cloud", 7, NOT NULL),
        ("Ryan", "Crow", 8, 7);

    
