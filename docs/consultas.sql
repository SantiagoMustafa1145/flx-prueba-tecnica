-- En este archivo deben estar tus ejercicios de consultas sql

--1
SELECT id, nombres, apellido FROM empleados ORDER BY nombres DESC;

--2
SELECT empleados.id, empleados.nombres, empleados.apellido, puestos.puesto, localidades.localidad 
    FROM empleados
    JOIN puestos ON empleados.puesto_id = puestos.id
    JOIN departamentos ON empleados.departamento_id = departamentos.id
    JOIN localidades ON departamentos.localidad_id = localidades.id
    WHERE puestos.puesto = "Soporte";

--3
SELECT id, nombres, apellido FROM empleados WHERE nombres LIKE "%o";

--4
SELECT empleados.id, empleados.nombres, empleados.sueldo, localidades.localidad
    FROM empleados
    JOIN departamentos ON empleados.departamento_id = departamentos.id
    JOIN localidades ON departamentos.localidad_id = localidades.id
    WHERE localidades.localidad = "Carlos Paz";

--5
SELECT empleados.id, empleados.nombres, empleados.sueldo, localidades.localidad 
    FROM empleados 
    JOIN departamentos ON empleados.departamento_id = departamentos.id
    JOIN localidades ON departamentos.localidad_id = localidades.id
    WHERE empleados.sueldo BETWEEN 10000 AND 13000;

--6
SELECT departamentos.denominacion, COUNT(empleados.id)
    FROM departamentos
    JOIN empleados ON departamentos.id = empleados.departamento_id
    HAVING COUNT(empleados.id) > 5
    GROUP BY departamentos.denominacion ASC;

--7
SELECT empleados.id, empleados.nombres, empleados.apellido, puestos.puesto, localidades.localidad 
    FROM empleados
    JOIN puestos ON empleados.puesto_id = puestos.id
    JOIN departamentos ON empleados.departamento_id = departamentos.id
    JOIN localidades ON departamentos.localidad_id = localidades.id
    WHERE localidades.localidad = "Córdoba" AND (puestos.puesto = "Analista" OR puestos.puesto = "Programador") ORDER BY puestos.puesto ASC;

--8
SELECT AVG(sueldo) FROM empleados;

--9
SELECT departamentos.denominacion, MAX(empleados.sueldo)
    FROM empleados
    JOIN departamentos ON empleados.departamento_id = departamentos.id
    WHERE departamentos.id = 10;

--10
SELECT departamentos.denominacion, MIN(empleados.sueldo)
    FROM empleados
    JOIN departamentos ON empleados.departamento_id = departamentos.id
    WHERE departamentos.denominacion = "Soporte";

--11
SELECT puestos.puesto, SUM(empleados.sueldo)
    FROM empleados
    JOIN puestos ON empleados.puesto_id = puestos.id
    GROUP BY puestos.puesto;