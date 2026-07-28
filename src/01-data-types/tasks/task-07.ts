/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type app={
    student:{
    studentid:string,
    fullname:string,
    grade:string,
    },
    course:{
        courseid:string,
        title:string,
        teachername:string,
        totallearninghours:string
    },

    registration:{
        date:string,
        payment:boolean
    }
}

const student1 : app ={
    student:{
        studentid:`091812`,
        fullname:`mraboxo`,
        grade:`8`
    },
    course:{
        courseid:`0921281`,
        title:`math`,
        teachername:`budi setiawan`,
        totallearninghours:`3`
    },
    registration:{
        date:`11-12-2024`,
        payment:true
    }
}

const student2 : app ={
    student:{
        studentid:`091856`,
        fullname:`donnaruma`,
        grade:`12`
    },
    course:{
        courseid:`09212678`,
        title:`science`,
        teachername:`eko saputar`,
        totallearninghours:`12`
    },
    registration:{
        date:`31-01-2024`,
        payment:true
    }
}

const student3 : app ={
    student:{
        studentid:`091342`,
        fullname:`fatih`,
        grade:`1`
    },
    course:{
        courseid:`09212332`,
        title:`social`,
        teachername:`suseno`,
        totallearninghours:`2`
    },
    registration:{
        date:`11-12-2024`,
        payment:false
    }
}

console.log("student1")
console.log("studenid"+student1.student.studentid)
console.log("fullname"+student1.student.fullname)
console.log("grade"+student1.student.grade)
console.log("course"+student1.course.courseid)
console.log("title"+student1.course.title)
console.log("teachername"+student1.course.teachername)
console.log("total learning hours"+student1.course.totallearninghours)
console.log("registration date"+student1.registration.date)
console.log("payment"+student1.registration.payment)

console.log("student2")
console.log("studenid"+student2.student.studentid)
console.log("fullname"+student2.student.fullname)
console.log("grade"+student2.student.grade)
console.log("course"+student2.course.courseid)
console.log("title"+student2.course.title)
console.log("teachername"+student2.course.teachername)
console.log("total learning hours"+student2.course.totallearninghours)
console.log("registration date"+student2.registration.date)
console.log("payment"+student2.registration.payment)