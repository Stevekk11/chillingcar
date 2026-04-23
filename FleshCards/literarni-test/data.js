const quizData = [
  // Module Q1
  {
    question: "Consider your school library. Detail of one student borrowing one book data or information",
    answers: [
      "Data",
      "Information",
      "Both",
      "Neither"
    ],
    correct: [0],
  },
  {
    question: "Consider your school library. Is the total number of books out on loan in one given month",
    answers: [
      "Data",
      "Information",
      "Both",
      "Neither"
    ],
    correct: [1],
  },
  {
    question: "Users could directly interact with which of the following software to access essential business applications",
    answers: [
      "operating system software",
      "Gui software",
      "internet browser software"
    ],
    correct: [0, 1, 2],
  },
  {
    question: "Software cannot operate without hardware. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A specialized type of software, which controls and manages the hardware in a computer system",
    answers: [
      "Operating system",
      "Application software",
      "Utility software"
    ],
    correct: [0],
  },
  {
    question: "The overall mission of the oracle corporation is to use the internet and fast processing servers to build its own network. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "The market for IT professionals is still increasing and will continue to do so in the future as the world gets ever more dependent on computer systems. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "How do you turn data into information?",
    answers: [
      "By querying it or accessing it"
    ],
    correct: [0],
  },
  {
    question: "Once you have learned how to write programs and build systems, you no longer need any input or involvement from any users as you are perfectly capable of delivering the systems and business need and want. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Entities are transformed into tables during the Database design process. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Data modeling is the last step in the database development process. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Sql became the most commonly used query language in the 1980s. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "The demand for information Technology professionals in todays market is increasing. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which of the following are examples of data becoming information",
    answers: [
      "E. A, B, and D"
    ],
    correct: [0],
  },
  {
    question: "Which term describes the physical components of a computer system?",
    answers: [
      "Hardware"
    ],
    correct: [0],
  },
  {
    question: "The work of E.F.Codd in the early 1970s led to the development of relational databases. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "What is the difference between information and data",
    answers: [
      "Data turns into useful information. It is stored in a database and accessed by systems and users"
    ],
    correct: [0],
  },
  {
    question: "Oracle was one of the first relational database systems available commercially. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "In the grid computing model, resources are pooled together for efficiency. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Personal computers (PCs) have been in existence since 1950. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Databases are used in most countries and by most governments. Life, as we know it, would change drastically if we no longer had access to databases. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Businesses involved in any of the following typically use databases to handle their data: Finance, Logistics, Commerce, Procurement, and Distribution. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which of the following are examples of e-business that use database software",
    answers: [
      "Online personal shopping service",
      "Online book store",
      "Online clothing store"
    ],
    correct: [0, 1, 2],
  },
  {
    question: "Every time you shop online, it is likely you will be accessing a database. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Most of the well known Internet search engines use databases to store data. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Changes in computing have affected many of our day-to-day activities. Are all of the following examples of this charge? Yes or No?",
    answers: [
      "Yes",
      "No"
    ],
    correct: [0],
  },
  {
    question: "Which of the following represents the correct sequence of steps in the Database Development Process",
    answers: [
      "Analyze,Design,Build",
      "Design,Analyze,Build",
      "Build,Design,Analyze"
    ],
    correct: [0],
  },
  {
    question: "Information which was gained from data is the same as: (Choose Two)",
    answers: [
      "Raw Materials",
      "Knowledge",
      "Intelligence",
      "There is no difference between data and information."
    ],
    correct: [1, 2],
  },

  // Module Q2
  {
    question: "Which of the following entities most likely contains valid attributes?",
    answers: [
      "Entity: Mother. Attributes: Name, Birthdate, Occupation, Start Date",
      "Entity: Home. Attributes: Number of Bedrooms, Owner, Address, Date Built",
      "Entity: Pet. Attributes: Name, Birthdate, Owner",
      "Entity: Car. Attributes: Owner Occupation, Owner Salary, Speed"
    ],
    correct: [1, 2],
  },
  {
    question: "A well structured ERD will show only some parts of the finished data model. You should never try to model the entire system in one diagram, no matter how small the diagram might be. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Data modeling is performed for the following reasons: (Choose Two)",
    answers: [
      "We do not need data models; we can just start coding right away.",
      "We draw an ERD solely to please the users; once completed, the ERD is never referred to again as it serves no purpose in the real world.",
      "It helps discussions and reviews.",
      "The ERD becomes a blueprint for designing the actual system."
    ],
    correct: [2, 3],
  },
  {
    question: "An ERD is an example of a Physical Model. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "Which of the following are examples of ENTITY: Instance? (Choose Two)",
    answers: [
      "ANIMAL: Dog",
      "MEAT PRODUCT: Lettuce",
      "TRANSPORTATION METHOD: Car",
      "BODY PART: Larry Ellison"
    ],
    correct: [0, 2],
  },
  {
    question: "Data models are drawn to show users the actual Data that their new system will contain; only Data listed on the Diagram can be entered into the Database. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "A/an ________ is a piece of information that in some way describes an entity. It is a property of the entity and it quantifies, qualifies, classifies, or specifies the entity.",
    answers: [
      "Table",
      "ERD",
      "Process",
      "Attribute"
    ],
    correct: [3],
  },
  {
    question: "An Entity Relationship model is independent of the hardware or software used for implementation. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Entities are usually verbs. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A Conceptual Model is not concerned with how the Physical Model will be implemented. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A/an ________ is defined as \"Something\" of significance to the business about which data must be known.",
    answers: [
      "Instance",
      "Relationship",
      "Entity",
      "None of the above"
    ],
    correct: [2],
  },
  {
    question: "Which of the following statements about Entities are true? (Choose Three)",
    answers: [
      "A name for a set of similar \"things\"",
      "\"Something\" of significance to the business about which data must be known.",
      "They never have Instances",
      "They are usually a noun."
    ],
    correct: [0, 1, 3],
  },
  {
    question: "Which of the following attributes is suitable to be a Unique Identifier?",
    answers: [
      "First name",
      "Last name",
      "Address",
      "Social Security Number"
    ],
    correct: [3],
  },
  {
    question: "Which of the following is an example of a volatile attribute?",
    answers: [
      "Name",
      "Age",
      "Date of Birth",
      "Hire Date"
    ],
    correct: [1],
  },
  {
    question: "Entity Relationship modeling is dependent on the hardware or software used for implementation, so you will need to change your ERD if you decide to change Hardware Vendor. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "The purpose of an ERD is to document the proposed system and facilitate discussion and understanding of the requirements captured by the developer. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "The Physical Model is derived from the Conceptual Model. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "What is the purpose of a Unique Identifier?",
    answers: [
      "To identify one unique instance of an entity by using one or more attributes and/or relationships.",
      "To identify a specific row within a table, using one or more columns and/or foreign keys.",
      "To uniquely determine a table and columns within that table.",
      "Create an entity that is unlike any other entity aside from itself."
    ],
    correct: [0],
  },
  {
    question: "Which of the following can be found in an ERD? (Choose Two)",
    answers: [
      "Entities",
      "Tables",
      "Attributes",
      "Instances"
    ],
    correct: [0, 2],
  },
  {
    question: "A/an ________'s value can be a number, a character string, a date, an image, a sound.",
    answers: [
      "Table",
      "Attribute",
      "Entity",
      "ERD"
    ],
    correct: [1],
  },
  {
    question: "Attributes can only have one value at any point for each instance in the entity. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "In the following statements, find two good examples of ENTITY: Instance. (Choose Two)",
    answers: [
      "DAIRY PRODUCT: milk",
      "TRAIN: runs",
      "BOOK: Biography of Mahatma Gandhi",
      "VEGETABLE: grows"
    ],
    correct: [0, 2],
  },
  {
    question: "Unique Identifiers...",
    answers: [
      "Distinguish one entity from another",
      "Distinguish nothing",
      "Distinguish one instance of an entity from all other instances of that entity",
      "Distinguish all entities in a database"
    ],
    correct: [2],
  },
  {
    question: "Many reasons exist for creating a conceptual model. Choose three appropriate reasons from the options below. (Choose Three)",
    answers: [
      "They accurately describe what a physical model will contain.",
      "They model the information flow of data.",
      "They capture the implementation details of the physical model.",
      "They model functional and informational needs.",
      "They capture current and future needs."
    ],
    correct: [0, 3, 4],
  },
  {
    question: "Which of the following statements about ERD's is false?",
    answers: [
      "Model all information that is derivable from other information already modeled.",
      "Capture all required information.",
      "Locate information in a predictable, logical place.",
      "Ensure that information appears only once."
    ],
    correct: [0],
  },
  {
    question: "Attributes can be either mandatory or optional. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "All of the following could be attributes of an ENTITY called PERSON, except which one?",
    answers: [
      "Haircolor",
      "Weight",
      "Natacha Hansen",
      "Gender"
    ],
    correct: [2],
  },
  {
    question: "All of the following would be instances of the entity PERSON except which?",
    answers: [
      "Grace Abinajam",
      "Male",
      "David Jones",
      "Angelina Rosalie"
    ],
    correct: [1],
  },
  {
    question: "An ERD is an example of a Logical Model. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [1],
  },
  {
    question: "Which of the following statements about attributes are true? (Choose Three)",
    answers: [
      "They describe, qualify, quantify, classify, or specify an entity.",
      "They must be single valued.",
      "They have a data type, such as number or character string.",
      "They are often adjectives."
    ],
    correct: [0, 1, 2],
  },
  {
    question: "Which of the following statements are true about ERD's? (Choose Two)",
    answers: [
      "You should not model derivable data.",
      "A piece of information can be shown multiple times on an ERD.",
      "All data must be represented on the ERD, including derived summaries and the result of calculations.",
      "A piece of information should only be found in one place on an ERD."
    ],
    correct: [0, 3],
  },
  {
    question: "The word \"Volatile\" means...",
    answers: [
      "Changing constantly; unstable",
      "Limited quantity",
      "Static; unlikely to change",
      "Large quantity"
    ],
    correct: [0],
  },
  {
    question: "Documenting Business Requirements helps developers control the scope of the system and prevents users from claiming that the new system does not meet their business requirements. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },

  // Module Q3
  {
    question: "When reading the relationships in an ERD, you are said to be speaking:",
    answers: [
      "Entity-ish",
      "Gibberish",
      "ERDish",
      "Relationship-ish"
    ],
    correct: [2],
  },
  {
    question: "Relationships always exist between",
    answers: [
      "3 or more attributes",
      "2 entities (or one entity and itself)",
      "3 or more entities",
      "2 attributes"
    ],
    correct: [1],
  },
  {
    question: "Entity names are always singular. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Relationships can be either mandatory or optional. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Matrix Diagrams are used to verify that all relationships have been identified for an ERD. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which symbol is used to show that a particular attribute is mandatory?",
    answers: [
      "*",
      "o",
      "f",
      "&"
    ],
    correct: [0],
  },
  {
    question: "Which of the following are used to show a relationship on an ERD? (Choose Three)",
    answers: [
      "Solid line",
      "# symbol",
      "Crow's foot",
      "Dashed line"
    ],
    correct: [0, 2, 3],
  },
  {
    question: "Relationship names are not shown on an ERD. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "One Relationship can be mandatory in one direction and optional in the other direction. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "In a business that sells pet food, choose the best relationship name between FOOD TYPE and ANIMAL (e.g. dog, horse, or cat). (Choose Two)",
    answers: [
      "Each ANIMAL must be the seller of one or more FOOD TYPES.",
      "Each FOOD TYPE must be suitable for one or more ANIMALs.",
      "Each FOOD TYPE may be manufactured by one or more ANIMALs.",
      "Each FOOD TYPE may be given to one or more ANIMALs."
    ],
    correct: [1, 3],
  },
  {
    question: "What are the three properties that every relationship should have?",
    answers: [
      "Name, optionality, cardinality",
      "Transferability, degree, name",
      "A UID bar, a diamond, an arc",
      "Name, optionality, arcs"
    ],
    correct: [0],
  },
  {
    question: "ERDish describes a relationship in words. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Matrix Diagrams show Optionality and Cardinality of the ERDs they document. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "Matrix Diagrams are developed BEFORE the ERD. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [1],
  },
  {
    question: "Which of the following are true about Cardinality? (Choose Two)",
    answers: [
      "Cardinality tells \"how many\".",
      "Cardinality specifies a counting number (like 1, 2, 3, 4 etc.) in a relationship.",
      "Cardinality specifies whether something is required or not.",
      "Cardinality specifies only singularity or plurality, but not a specific plural number."
    ],
    correct: [0, 3],
  },
  {
    question: "Relationship Cardinality is important. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which of the following are used to show Cardinality on an ERD? (Choose Two)",
    answers: [
      "Dashed line",
      "Crow's foot",
      "Solid line",
      "Single toe"
    ],
    correct: [1, 3],
  },
  {
    question: "When reading a relationship between 2 entities, the relationship is read both from left to right and right to left. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Entity boxes are drawn as",
    answers: [
      "Hard Boxes",
      "Normal Circles",
      "Bold Circles",
      "Soft Boxes"
    ],
    correct: [3],
  },
  {
    question: "Which of the following are true about Relationship Optionality? (Choose Two)",
    answers: [
      "Optionality specifies a counting number (like 1, 2, 3, 4 etc.) in a relationship.",
      "Optionality answers \"may or must\".",
      "Optionality specifies only singularity or plurality, but not a specific plural number.",
      "Optionality specifies whether something is required or not."
    ],
    correct: [1, 3],
  },
  {
    question: "The many end of a Relationship is called:",
    answers: [
      "Gulls Foot",
      "Crows Ear",
      "Pigs Ear",
      "Crows Foot"
    ],
    correct: [3],
  },
  {
    question: "To identify an attribute as part of a unique identifier on an ER diagram, the # symbol goes in front of it. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },

  // Module Q4
  {
    question: "All instances of the supertype must be an instance of one of the subtypes. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Why is it important to identify and document structural rules?",
    answers: [
      "Ensures we know what data to store and how that data works together.",
      "Ensures nothing. There are no benefits to be gained from documenting your Structural Business Rules. We need to concentrate on the Procedural Business Rules only.",
      "Ensures we know what processes are in place and how to program them.",
      "All of the Above."
    ],
    correct: [0],
  },
  {
    question: "You can only create relationships to a Supertype, not to a Subtype. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A supertype can only have two subtypes and no more. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A new system would have a mixture of both Procedural and Structural Business Rules as part of the documentation of that new system. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A subtype can have a relationship not shared by the supertype. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A subtype is drawn on an ERD as an entity inside the \"softbox\" of the supertype. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "How would you model a business rule that states that on a student's birthday, he does not have to attend his classes?",
    answers: [
      "You cannot model this. You need to document it",
      "Use a subtype",
      "Make the attribute Birthdate mandatory",
      "Use a supertype"
    ],
    correct: [0],
  },
  {
    question: "How should you handle constraints that cannot be modeled on an ER diagram?",
    answers: [
      "Always let the network architect handle them",
      "Explain them to the users so they can enforce them",
      "List them on a separate document to be handled programmatically",
      "All constraints must be modeled and shown on the ER diagram"
    ],
    correct: [2],
  },
  {
    question: "Business rules are important to data modelers because:",
    answers: [
      "A. They capture all of the needs, processes, and required functionality of the business.",
      "B. All Business rules are easily implemented in the ERD diagram.",
      "C. The data modeler must focus on structural rules, because they are easily represented diagrammatically and eliminate other rules that involve extra procedures or programming.",
      "D. Both A and C are true."
    ],
    correct: [0],
  },
  {
    question: "Which of the following is true about subtypes?",
    answers: [
      "Subtypes should not be exhaustive.",
      "Subtypes must be mutually exclusive.",
      "Subtypes must not be mutually exclusive.",
      "One instance of a supertype may belong to two subtypes."
    ],
    correct: [1],
  },
  {
    question: "Why is it important to identify and document business rules?",
    answers: [
      "It allows you to create a complete data model and then check it for accuracy.",
      "It allows you to improve the client's business.",
      "It ensures that the data model will automate all manual processes.",
      "None of the above."
    ],
    correct: [0],
  },
  {
    question: "All ER diagrams must have one of each of the following: (Choose Two)",
    answers: [
      "One or more Entities",
      "Relationships between entities",
      "At least one supertype and subtype",
      "Arcs"
    ],
    correct: [0, 1],
  },
  {
    question: "Can all constraints be modeled on an ER diagram?",
    answers: [
      "Yes, all constraints must be modeled and shown on the ER diagram",
      "No, in which case you should let the database administrator handle them",
      "No, but you just explain them to the users so they can enforce them",
      "No, and those that cannot be modeled should be listed on a separate document to be handled programmatically"
    ],
    correct: [3],
  },
  {
    question: "A subtype is shown on an ERD as an entity with a one to many relationship to the supertype. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Which of the following is an example of a structural business rule?",
    answers: [
      "Buildings to be purchased by the business must be current with earthquake building code.",
      "All employees must belong to at least one department.",
      "All products will have a selling price no less than 30% greater than wholesale.",
      "All overdue payments will have an added 10% late fee."
    ],
    correct: [1],
  },
  {
    question: "A Supertype can have only one subtype. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A business rule such as \"We only ship goods after customers have completely paid any outstanding balances on their account\" is best enforced by:",
    answers: [
      "We need to trust our customers, and we know they will pay some day.",
      "Making the payment attribute optional.",
      "Making the payment attribute null.",
      "Creating additional programming code to verify no goods are shipped until the account has been settled in full."
    ],
    correct: [3],
  },
  {
    question: "All instances of a subtype may be an instance of the supertype but does not have to. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "How would you model a business rule that states that girls and boys may not attend classes together?",
    answers: [
      "Make the attribute Gender optional",
      "Supertype STUDENT has two subtypes BOY and GIRL which are related to GENDER, which is related to CLASS",
      "Use a supertype",
      "Make the attribute Gender mandatory"
    ],
    correct: [1],
  },
  {
    question: "A business rule such as \"All accounts must be paid in full within 10 days of billing\" is best enforced by:",
    answers: [
      "Making the payment attribute mandatory.",
      "Creating a message to be printed on every bill that reminds the customer to pay within ten days.",
      "Creating additional programming code to identify and report accounts past due.",
      "Making the relationship between CUSTOMER and PAYMENT fully mandatory and 1:1 on both sides."
    ],
    correct: [2],
  },
  {
    question: "All instances of a subtype must be an instance of the supertype. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },

  // Module Q5
  {
    question: "Intersection Entities often have the relationships participating in the UID, so the relationships are often barred. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "What relationship is described by the statements: \"Each CUSTOMER may place one or more ORDERS, each ORDER must be placed by one and only one CUSTOMER\"",
    answers: [
      "One to Many",
      "Many to Many",
      "One to One",
      "Many to More"
    ],
    correct: [0],
  },
  {
    question: "What uncommon relationship is described by the statements: \"Each DNA SAMPLE may be taken from one and only one PERSON and each PERSON may provide one and only one DNA SAMPLE\"",
    answers: [
      "One to One Optional",
      "One to Many Optional",
      "One to Many Mandatory",
      "Many to Many Mandatory"
    ],
    correct: [0],
  },
  {
    question: "When you resolve a M:M, you simply re-draw the relationships between the two original entities; no new entities are created. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Many to many relationships between entities usually hide what?",
    answers: [
      "Another entity",
      "More attributes",
      "Another relationship",
      "Uniqueness"
    ],
    correct: [0],
  },
  {
    question: "One to many relationships are the most uncommon type of relationships in an ERD. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A Diamond on a relationship indicates the Relationship as Non-Transferable. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A relationship on an ERD can have attributes. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Which of the following pairs of entities is most likely to be modeled as a 1:1 relationship?",
    answers: [
      "CAR and WHEEL",
      "TEACHER and SUBJECT AREA",
      "PERSON and FINGERPRINT",
      "TREE and BRANCH"
    ],
    correct: [2],
  },
  {
    question: "Relationships can be Redundant. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "If a relationship can NOT be moved between instances of the entities it connects, it is said to be:",
    answers: [
      "Optional",
      "Non-Transferable",
      "Transferable",
      "Mandatory"
    ],
    correct: [1],
  },
  {
    question: "The relationship between CUSTOMER and RECEIPT is an example of a non-transferable relationship. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A barred relationship on an ERD signifies that the UID of the intersection entity is inherited from the entities that made up the original many to many relationship. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A non-transferable relationship is represented by which of the following symbols?",
    answers: [
      "Triangle",
      "Circle",
      "Diamond",
      "Heart"
    ],
    correct: [2],
  },
  {
    question: "Which of the following is an example of a non-transferable relationship?",
    answers: [
      "STUDENT to COURSE",
      "PERSON to BIRTH PLACE",
      "EMPLOYEE to DEPARTMENT",
      "TEACHER to SCHOOL"
    ],
    correct: [1],
  },
  {
    question: "Which of the following pairs of entities is most likely to be modeled as a M:M relationship?",
    answers: [
      "PERSON and FINGERPRINT",
      "TEACHER and SUBJECT AREA",
      "CAR and WHEEL",
      "TREE and BRANCH"
    ],
    correct: [1],
  },
  {
    question: "Many to many relationships must be left in the Model. It is important to have them documented as M-M. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "When you resolve a M:M by creating an intersection entity, this new entity will always inherit:",
    answers: [
      "The UID's from the entities in the original M:M.",
      "A relationship to each entity from the original M:M.",
      "The attributes of both related entities.",
      "Nothing is inherited from the original entities and relationship."
    ],
    correct: [1],
  },
  {
    question: "If an intersection entity is formed that contains no attributes of its own, its uniqueness may be modeled by",
    answers: [
      "Creating new attributes.",
      "Barring the relationships to the original entities.",
      "Placing the UID attributes from the original entities into the intersection entity.",
      "None of the above."
    ],
    correct: [1],
  },
  {
    question: "Every ERD must have at least one non-transferable relationship. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "If a relationship can be moved between instances of the entities it connects, it is said to be:",
    answers: [
      "Transferable",
      "Recursive",
      "Implicit",
      "Committed"
    ],
    correct: [0],
  },
  {
    question: "A non-transferable relationship means the relationship is mandatory at both sides. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "Non-transferable relationships can only be mandatory, not optional. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "If two entities have two relationships between them, these relationships can be either __________ or __________.",
    answers: [
      "Redundant or Required",
      "Resourced and Really Good",
      "Redundant and Replicated",
      "Replicated or Required"
    ],
    correct: [0],
  },
  {
    question: "What do you call the entity created when you resolve a M:M relationship?",
    answers: [
      "Recursive entity",
      "M:M entity",
      "Intersection entity",
      "Inclusion entity"
    ],
    correct: [2],
  },
  {
    question: "If the same relationship is represented twice in an Entity Relationship Model, it is said to be:",
    answers: [
      "Replicated",
      "Redundant",
      "Resourceful",
      "Removable"
    ],
    correct: [1],
  },

  // Module Q6
  {
    question: "People are not born with \"numbers\", but a lot of systems assign student numbers, customer IDs, etc. These are known as a/an __________ UID.",
    answers: [
      "Unrealistic",
      "Structured",
      "Artificial",
      "Identification"
    ],
    correct: [2],
  },
  {
    question: "An attribute can have multiple values and still be in 1st Normal Form. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "If an entity has a multi-valued attribute, to conform to the rule of 1st Normal Form we:",
    answers: [
      "Create an additional entity and relate it to the original entity with a 1:M relationship.",
      "Do nothing, an entity does not have to be in 1st Normal Form",
      "Make the attribute optional",
      "Create an additional entity and relate it to the original entity with a M:M relationship."
    ],
    correct: [0],
  },
  {
    question: "When all attributes are single-valued, the database model is said to conform to:",
    answers: [
      "3rd Normal Form",
      "1st Normal Form",
      "2nd Normal Form",
      "4th Normal Form"
    ],
    correct: [1],
  },
  {
    question: "The candidate UID that is chosen to identify an entity is called the Primary UID; other candidate UIDs are called Secondary UIDs.",
    answers: [
      "Yes, this is the way UID's are named.",
      "No, each Entity can only have one UID, the secondary one.",
      "No, after UIDs are first sorted, the first one is called the Primary UID, the second is the Secondary UID, etc.",
      "No, it is not possible to have more than one UID for an Entity."
    ],
    correct: [0],
  },
  {
    question: "Where an entity has more than one attribute suitable to be the Primary UID, these are known as ____________ UIDs.",
    answers: [
      "Composite",
      "Simple",
      "Secondary",
      "Candidate"
    ],
    correct: [3],
  },
  {
    question: "Any Non-UID attribute must be dependent upon the entire UID. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "An entity can only have one Primary UID. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "When any attribute in an entity is dependent on any other non-UID attribute in that entity, this is known as:",
    answers: [
      "Transitive dependency",
      "Non-dependency",
      "Dependency",
      "Functional dependency"
    ],
    correct: [0],
  },
  {
    question: "Examine the following entity and decide which attribute breaks the 2nd Normal Form rule: ENTITY: RECEIPT ATTRIBUTES: #CUSTOMER ID #STORE ID STORE LOCATION DATE",
    answers: [
      "STORE ID",
      "STORE LOCATION",
      "CUSTOMER ID",
      "DATE"
    ],
    correct: [1],
  },
  {
    question: "Examine the following Entity and decide which rule of Normal Form is being violated: ENTITY: CLIENT ATTRIBUTES: # CLIENT ID FIRST NAME LAST NAME ORDER ID STREET",
    answers: [
      "1st Normal Form",
      "2nd Normal Form",
      "3rd Normal Form",
      "None of the above, the entity is fully normalised."
    ],
    correct: [0],
  },
  {
    question: "To convert an entity with a multi-valued attribute to 1st Normal Form, we create an additional entity and relate it to the original entity with a 1:1 relationship. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "When is an entity in 2nd Normal Form?",
    answers: [
      "When all non-UID attributes are dependent upon the entire UID.",
      "When attributes with repeating or multi-values are present.",
      "When no attributes are mutually independent and all are fully dependent on the primary key.",
      "None of the Above."
    ],
    correct: [0],
  },
  {
    question: "Examine the following Entity and decide which rule of Normal Form is being violated: ENTITY: CLIENT ORDER ATTRIBUTES: # CLIENT ID # ORDER ID FIRST NAME LAST NAME ORDER DATE CITY",
    answers: [
      "3rd Normal Form.",
      "1st Normal Form.",
      "2nd Normal Form.",
      "None of the above, the entity is fully normalised."
    ],
    correct: [2],
  },
  {
    question: "Examine the following Entity and decide which rule of Normal Form is being violated: ENTITY: CLIENT ATTRIBUTES: # CLIENT ID FIRST NAME LAST NAME STREET CITY",
    answers: [
      "3rd Normal Form.",
      "1st Normal Form.",
      "2nd Normal Form.",
      "None of the above, the entity is fully normalised."
    ],
    correct: [3],
  },
  {
    question: "Examine the following entity and decide how to make it conform to the rule of 2nd Normal Form: ENTITY: RECEIPT ATTRIBUTES: #CUSTOMER ID #STORE ID STORE LOCATION DATE",
    answers: [
      "Delete the attribute STORE ID",
      "Move the attribute STORE LOCATION to a new entity, STORE, with a UID of STORE ID, and create a relationship to the original entity.",
      "Do nothing, it is already in 2nd Normal Form.",
      "Move the attribute STORE LOCATION to a new entity, STORE, with a UID of STORE LOCATION, and create a relationship to the original entity."
    ],
    correct: [1],
  },
  {
    question: "If an entity has no attribute suitable to be a Primary UID, we can create an artificial one. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which of the following would be suitable UIDs for the entity EMPLOYEE? (Choose Two)",
    answers: [
      "Last Name",
      "Address",
      "Employee ID",
      "Social Security Number"
    ],
    correct: [2, 3],
  },
  {
    question: "To resolve a 2nd Normal Form violation, we:",
    answers: [
      "Move the attribute that violates 2nd Normal Form to a new entity with a relationship to the original entity.",
      "Move the attribute that violates 2nd Normal Form to a new ERD. X",
      "Do nothing, an entity does not need to be in 2nd Normal Form.",
      "Delete the attribute that was causing the violation."
    ],
    correct: [0],
  },
  {
    question: "As a database designer, you do not need to worry about where in the datamodel you store a particular attribute; as long as you get it onto the ERD, your job is done. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "An entity ORDER has the attributes Order ID, Order Date, Product ID, Customer ID. This entity is in 1st Normal Form. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "There is no limit to how many attributes can make up an entity's UID. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A transitive dependency exists when any attribute in an entity is dependent on any other non-UID attribute in that entity. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "The Rule of 3rd Normal Form states that No Non-UID attribute can be dependent on another non-UID attribute. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A candidate UID that is not chosen to be the Primary UID is called:",
    answers: [
      "Simple",
      "Secondary",
      "Composite",
      "Artificial"
    ],
    correct: [1],
  },
  {
    question: "Normalizing an Entity to 1st Normal Form is done by removing any attributes that contain multiple values. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A unique identifier can only be made up of one attribute. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "What is the rule of Second Normal Form?",
    answers: [
      "No non-UID attributes can be dependent on any part of the UID.",
      "Some non-UID attributes can be dependent on the entire UID.",
      "All non-UID attributes must be dependent upon the entire UID.",
      "None of the above."
    ],
    correct: [2],
  },
  {
    question: "Examine the following entity and decide which attribute breaks the 2nd Normal Form rule: ENTITY: CLASS ATTRIBUTES: #CLASS ID #TEACHER ID SUBJECT TEACHER NAME",
    answers: [
      "SUBJECT",
      "CLASS ID",
      "TEACHER NAME",
      "TEACHER ID"
    ],
    correct: [2],
  },
  {
    question: "When data is only stored in one place in a database, the database conforms to the rules of ________.",
    answers: [
      "Normalization",
      "Normality",
      "Multiplication",
      "Reduction"
    ],
    correct: [0],
  },
  {
    question: "Examine the following Entity and decide which sets of attributes break the 3rd Normal Form rule: ENTITY: TRAIN ATTRIBUTES: TRAIN ID MAKE DRIVER ID DRIVER NAME DATE OF MANUFACTURE",
    answers: [
      "TRAIN ID, MAKE",
      "DRIVER ID, DRIVER NAME",
      "MAKE, DATE OF MANUFACTURE",
      "None of the above, the entity is already in 3rd Normal Form."
    ],
    correct: [1],
  },
  {
    question: "When data is stored in more than one place in a database, the database violates the rules of ________.",
    answers: [
      "Normalcy",
      "Replication",
      "Normalization",
      "Decency"
    ],
    correct: [2],
  },
  {
    question: "A UID can be made up from the following: (Choose Two)",
    answers: [
      "Synonyms",
      "Relationships",
      "Attributes",
      "Entities"
    ],
    correct: [1, 2],
  },

  // Module Q7
  {
    question: "A Hierarchical relationship is a series of relationships that reflect entities organized into successive levels. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Cascading UIDs are a feature often found in what type of Relationship?",
    answers: [
      "Hierarchical Relationship",
      "Recursive Relationship",
      "Invalid Relationship",
      "General Relationship"
    ],
    correct: [0],
  },
  {
    question: "An arc can often be modeled as Supertype and Subtypes. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "To visually represent exclusivity between two or more relationships in an ERD you would most likely use an _______.",
    answers: [
      "Attribute",
      "Relationship",
      "UID",
      "Arc"
    ],
    correct: [3],
  },
  {
    question: "Arcs model an Exclusive OR constraint. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A relationship between an entity and itself is called a/an:",
    answers: [
      "Recursive Relationship",
      "General Relationship",
      "Heirarchical Relationship",
      "Invalid Relationship"
    ],
    correct: [0],
  },
  {
    question: "Which of the following can be added to a relationship?",
    answers: [
      "An attribute",
      "An arc can be assigned",
      "An optional attribute can be created",
      "A composite attribute"
    ],
    correct: [1],
  },
  {
    question: "All relationships participating in an arc must be mandatory. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A recursive relationship must be Mandatory at both ends. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "Which of the following would best be represented by an arc?",
    answers: [
      "STUDENT (senior, male)",
      "STUDENT (University, Technical College)",
      "STUDENT (graduating, female)",
      "STUDENT (Grade A student, Average Student)"
    ],
    correct: [1],
  },
  {
    question: "Business organizational charts are often modeled as a Hierarchical relationship. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which of the following would best be represented by an arc?",
    answers: [
      "STUDENT (Grade A student, Average Student)",
      "TEACHER (Female, Bob)",
      "DELIVERY ADDRESS (Home, Office)",
      "PARENT (Girl, Bob)"
    ],
    correct: [2],
  },
  {
    question: "Every business has restrictions on which attribute values and which relationships are allowed. These are known as:",
    answers: [
      "Constraints.",
      "Entities.",
      "Attributes.",
      "Relationships."
    ],
    correct: [0],
  },
  {
    question: "A particular problem may be solved using either a Recursive Relationship or a Hierarchical Relationship, though not at the same time. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "A single relationship can be both Recursive and Hierarchical at the same time. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Arcs are Mandatory in Data Modeling. All ERD's must have at least one Arc. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A Recursive Relationship is represented on an ERD by a/an:",
    answers: [
      "Pig's Ear",
      "Crow's Foot",
      "Single Toe",
      "Dog's Tail"
    ],
    correct: [0],
  },
  {
    question: "Arcs are used to visually represent ________ between two or more relationships in an ERD.",
    answers: [
      "Sameness",
      "Inheritance",
      "Differences",
      "Exclusivity"
    ],
    correct: [3],
  },
  {
    question: "An entity could have more than one attribute that would be a suitable Primary UID. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },

  // Module Q8
  {
    question: "Conditional non-transferability refers to a relationship that may or may not be transferable, depending on time. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "In an ERD, it is a good idea to group your entities according to the expected volumes. By grouping high volume entities together, the diagrams could become easier to read. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Historical data must never be kept. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Which of the following statements are true for ERD's to enhance their readability? (Choose Two)",
    answers: [
      "It is OK to break down a large ERD into subsets of the overall picture. By doing so, you end up with more than one ERD that, taken together, documents the entire system.",
      "Avoid crossing one relationship line with another.",
      "The crows feet (many ends) can point whichever way is the easiest to draw.",
      "You must ensure that you have every single entity-even if hundreds of them exist-on one single, big diagram."
    ],
    correct: [0, 1],
  },
  {
    question: "Modeling historical data can produce a unique identifier that includes a date. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "How do you know when to use the different types of time in your design?",
    answers: [
      "The rules are fixed and should be followed.",
      "Always model time; you can take it out later if it is not needed.",
      "You would first determine the existence of the concept of time and map it against the Greenwich Mean Time.",
      "It depends on the functional needs of the system."
    ],
    correct: [3],
  },
  {
    question: "All systems must include functionality to provide logging or journaling in conceptual data models. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "All systems must have an entity called WEEK with a holiday attribute so that you know when to give employees a holiday. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "In a payroll system, it is desirable to have an entity called DAY with a holiday attribute when you want to track special holiday dates. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Formal rules exist for drawing ERD's. You must always follow them, even if it results in an ERD that is difficult to read. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "You are doing a data model for a computer sales company where the price fluctuates on a regular basis. If you want to allow the company to modify the price and keep track of the changes, what is the best way to model this?",
    answers: [
      "A. Create a product entity and a related price entity with start and end dates, and then let the users enter the new price whenever required.",
      "B. Create a new item and a new price every day.",
      "C. Use a price entity with a start and end date.",
      "D. Allow them to delete the item and enter a new one.",
      "E. Both A and C."
    ],
    correct: [4],
  },
  {
    question: "When a system requires that old values for attributes are kept on record, this is known as Journaling or Logging. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which of the following scenarios should be modeled so that historical data is kept? (Choose Two)",
    answers: [
      "BABY and AGE",
      "CUSTOMER and ORDERS",
      "TEACHER and AGE",
      "CUSTOMER and PAYMENTS"
    ],
    correct: [1, 3],
  },
  {
    question: "If you have an entity with a DATE attribute, in addition to other attributes that track date characteristics, you should create a DAY entity. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "No formal rules exist for drawing ERD's. The most important thing is to make sure that all entities, attributes, and relationships are documented on the diagram, and the diagram is clear and readable. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "What is the function of logging or journaling in conceptual data models?",
    answers: [
      "Creates a fixed time for all events in a data model.",
      "Represents entities as time in the data model.",
      "Gives a timestamp to all entities.",
      "Allows you to track the history of attribute values, relationships, and/or entire entities."
    ],
    correct: [3],
  },
  {
    question: "When you add the concept of time to your data model, your model becomes more complex. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "Which of the following scenarios should be modeled so that historical data is kept? (Choose Two)",
    answers: [
      "STUDENT and AGE",
      "LIBRARY and NUMBER OF BOOKS",
      "LIBRARY and BOOK",
      "STUDENT and GRADE"
    ],
    correct: [2, 3],
  },
  {
    question: "Which of the following is a logical constraint that could result from considering how time impacts an example of data storage?",
    answers: [
      "End Date must be before the Start Date.",
      "EMPLOYEE periods can overlap causing the database to crash.",
      "An ASSIGNMENT may only refer to an EMPLOYEE with a valid employee record at the Start Date of the ASSIGNMENT.",
      "Dates must be stored with Time."
    ],
    correct: [2],
  },
  {
    question: "Modeling historical data is optional. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "When modeling historical data the unique identifier is always made up of a barred relationship from the original two entities. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "In an ERD, High Volume Entities usually have very few relationships to other entities. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "There is no point in trying to group your entities together on your diagram according to volume, and making a diagram look nice is a waste of time. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Why would you want to model a time component when designing a system that lets people buy bars of gold?",
    answers: [
      "The price of gold fluctuates and, to determine the current price, you need to know the time of purchase.",
      "The Government of your country might want to be notified of this transaction.",
      "Sales people must determine where the gold is coming from.",
      "You would not want to model this; it is not important."
    ],
    correct: [0],
  },
  {
    question: "You must make sure all entities of a proposed system can fit onto one diagram. It is not allowed to break up a data model into more than one diagram. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Which of the following would be a logical constraint when modeling time for a City entity?",
    answers: [
      "Daily traffic patterns must be monitored to determine how many law enforcement officers are needed.",
      "If you are doing a system for any French City, you would need security clearance.",
      "Cities may change their names and/or country association if the borders of a country change.",
      "People are born in the city and people die in the city."
    ],
    correct: [2],
  },
  {
    question: "There are no circumstances where you would create a DAY entity. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Which of the following would be a logical constraint when modeling time for a country entity?",
    answers: [
      "People have births and deaths in their countries that must be tracked by the system.",
      "Daily traffic patterns must be monitored to determine which countries are overcrowded.",
      "If you are doing a system for France or Germany, you would need security clearance.",
      "Countries may change their names and/or borders over a period of time."
    ],
    correct: [3],
  },
  {
    question: "Which of the following statements are true to enhance the readability of ERDs? (Choose Two)",
    answers: [
      "Relationship lines should not cross.",
      "Crows feet (the many-ends of relationships) should consistently point the same direction where possible, either South & East or North & West.",
      "Crossing relationship lines help the readability of the diagram.",
      "It does not matter which way the crows feet (many ends of a relationship) point."
    ],
    correct: [0, 1],
  },
  {
    question: "When a relationship may or may not be transferable, depending on time, this is known as a/an:",
    answers: [
      "Arc",
      "Non-transferable Relationship",
      "Transferable Relationship",
      "Conditional Non-transferable Relationship"
    ],
    correct: [3],
  },
  {
    question: "Historical data should always be kept. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "You are doing a data model for a computer sales company where the price of postage depends upon the day of the week that goods are shipped. So shipping is more expensive if the customer wants a delivery to take place on a Saturday or Sunday. What would be the best way to model this?",
    answers: [
      "Use a Delivery Day entity, which holds prices against week days, and ensure we also have an attribute for the Requested Delivery Day in the Order Entity.",
      "Allow them to enter whatever delivery charge they want.",
      "Update the prices in the system, print out the current prices when they change, and pin them on the company noticeboard.",
      "Email current prices to all employees whenever a price changes."
    ],
    correct: [0],
  },

  // Module Q9
  {
    question: "When mapping supertypes, relationships at the supertype level transform as usual. Relationships at subtype level are implemented as foreign keys, but the foreign key columns all become mandatory. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Attributes become columns in a database table. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "The explanation below is an example of which constraint type? A primary key must be unique, and no part of the primary key can be null.",
    answers: [
      "Entity integrity",
      "Column integrity",
      "User-defined integrity",
      "Referential integrity"
    ],
    correct: [0],
  },
  {
    question: "A barred Relationship will result in a Foreign Key column that also is part of:",
    answers: [
      "The Primary Key",
      "The Column Name",
      "The Check Constraint",
      "The Table Name"
    ],
    correct: [0],
  },
  {
    question: "When mapping supertypes, relationships at the supertype level transform as usual. Relationships at the subtype level are implemented as foreign keys, but the foreign key columns all become optional. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "An Arc is transformed to the physical model by adding a foreign Key for every relationship in the Arc. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "In an Oracle database, why would 1_TABLE not work as a table name?",
    answers: [
      "The database does not understand all capital letters.",
      "Object names must not start with a number. They must begin with a letter.",
      "TABLE is a reserved word.",
      "There is no problem here. You can create a table called 1_TABLE."
    ],
    correct: [1],
  },
  {
    question: "In an Oracle database, why would the following table name not be allowed 'EMPLOYEE JOBS'?",
    answers: [
      "JOBS is a reserved word",
      "EMPLOYEE is a reserved word",
      "You cannot have spaces between words in a table name",
      "The database does not understand all capital letters"
    ],
    correct: [2],
  },
  {
    question: "Identify all of the incorrect statements that complete this sentence: A primary key is... (Choose Three)",
    answers: [
      "Only one column that must be null.",
      "A set of columns in one table that uniquely identifies each row in another table.",
      "One or more columns in a table that uniquely identifies each row in that table.",
      "A single column that uniquely identifies each column in a table."
    ],
    correct: [0, 1, 3],
  },
  {
    question: "The conceptual model is transformed into a physical model. The physical implementation will be a relational database. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "In a physical model, many to many relationships are resolved via a structure called a(n): ______________",
    answers: [
      "Subtype",
      "Intersection Entity",
      "Supertypes",
      "Intersection Table"
    ],
    correct: [3],
  },
  {
    question: "One-to-One relationships are transformed into Check Constraints in the tables created at either end of that relationship. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "A table should have a primary key. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [0],
  },
  {
    question: "The explanation below is an example of which constraint type? A column must contain only values consistent with the defined data format of the column.",
    answers: [
      "User-defined integrity",
      "Referential integrity",
      "Entity integrity",
      "Column integrity"
    ],
    correct: [3],
  },
  {
    question: "Which of the following is a valid reason for considering a Subtype Implementation?",
    answers: [
      "The resulting table will reside in a single database and be used by just ONE user.",
      "Most of the relationships are at the supertype level.",
      "Business functionality, business rules, access paths, and frequency of access are all very different between the subtypes.",
      "The common access paths for the supertypes are different."
    ],
    correct: [2],
  },
  {
    question: "In a physical data model, a relationship is represented as a:",
    answers: [
      "Column",
      "Primary Key",
      "Foreign Key",
      "Unique Identifier"
    ],
    correct: [2],
  },
  {
    question: "An \"Arc Implementation\" can be done just like any other Relationship - you simply add the required Foreign Keys. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Foreign keys cannot be null when:",
    answers: [
      "It refers to another table",
      "It is part of a primary key",
      "It contains three or more columns",
      "It refers to the same table"
    ],
    correct: [1],
  },
  {
    question: "It is possible to implement non-transferability via a simple Foreign Key Relationship. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "In a physical data model, a relationship is represented as a combination of: (Choose Two)",
    answers: [
      "Foreign Key",
      "Primary Key or Unique Key",
      "Column",
      "Check Constraint or Unique Key"
    ],
    correct: [0, 1],
  },
  {
    question: "A foreign key always refers to a primary key in the same table. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "The explanation below is an example of which constraint type? If the value in the balance column of the ACCOUNTS table is below 100, we must send a letter to the account owner which will require extra programming to enforce.",
    answers: [
      "Entity integrity",
      "User-defined integrity",
      "Referential integrity",
      "Column integrity"
    ],
    correct: [1],
  },
  {
    question: "The \"Arc Implementation\" is a synonym for what type of implementation?",
    answers: [
      "Suptype and Subtype Implementation",
      "Suptype Implementation",
      "Cascade Implementation",
      "Subtype Implementation"
    ],
    correct: [0],
  },
  {
    question: "Column integrity refers to",
    answers: [
      "Columns always containing text data less than 255 characters",
      "Columns always having values",
      "Columns always containing positive numbers",
      "Columns always containing values consistent with the defined data format"
    ],
    correct: [3],
  },
  {
    question: "When translating an arc relationship to a physical design, you must turn the arc relationships into foreign keys. What additional step must you take with the created foreign keys to ensure the exclusivity principle of arc relationships? (Assume that you are implementing an Exclusive Design) (Choose Two)",
    answers: [
      "Make all relationships mandatory",
      "Make all relationships optional",
      "Create an additional check constraint to verify that one foreign key is populated and the others are not",
      "All the above"
    ],
    correct: [1, 2],
  },
  {
    question: "The Physical model is created by transforming which of the following models?",
    answers: [
      "Constraint",
      "Physical",
      "Table",
      "Conceptual"
    ],
    correct: [3],
  },
  {
    question: "Why would this table name NOT work in an Oracle database? this_year_end+next_year",
    answers: [
      "Table names must begin with an alphabetic character.",
      "It is too long.",
      "The Plus sign + is not allowed in object names.",
      "None of the above."
    ],
    correct: [2],
  },
  {
    question: "One-to-One relationships are transformed into Foreign Keys in the tables created at either end of that relationship. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "One-to-Many Optional to Mandatory becomes a ______________ on the Master table.",
    answers: [
      "Optional Foreign Key",
      "Mandatory Foreign Key",
      "Unique Key",
      "Primary Key"
    ],
    correct: [1],
  },
  {
    question: "Foreign keys must be null. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "The Oracle Database can implement a many-to-many relationship. You simply create two foreign keys between the two tables. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "Identify all of the correct statements that complete this sentence: A primary key is... (Choose Three)",
    answers: [
      "A single column that uniquely identifies each row in a table",
      "Only one column that cannot be null",
      "A set of columns that uniquely identifies each row in a table",
      "A set of columns and keys in a single table that uniquely identifies each row in a single table"
    ],
    correct: [0, 2, 3],
  },
  {
    question: "In a physical data model, an entity becomes a ____________.",
    answers: [
      "Table",
      "Attribute",
      "Constraint",
      "Column"
    ],
    correct: [0],
  },
  {
    question: "The transformation from an ER diagram to a physical design involves changing terminology. Entities in the ER diagram become ________.",
    answers: [
      "Columns",
      "Tables",
      "Foreign Keys",
      "Unique Keys"
    ],
    correct: [1],
  },
  {
    question: "A foreign key cannot refer to a primary key in the same table. True or False?",
    answers: [
      "False",
      "True"
    ],
    correct: [0],
  },
  {
    question: "Relationships on an ERD can only be transformed into UIDs in the physical model. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "To resolve a many to many relationship in a physical model you create a(n) __________________?",
    answers: [
      "Unique key constraints",
      "Intersection table",
      "Intersection entity",
      "Two tables with Foreign key constraints between them"
    ],
    correct: [1],
  },
  {
    question: "When an Arc is transformed to the physical model every relationship in the Arc becomes a mandatory Foreign Key. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  },
  {
    question: "In a physical data model, an attribute becomes a ____________.",
    answers: [
      "Foreign Key",
      "Column",
      "Table",
      "Constraint"
    ],
    correct: [1],
  },
  {
    question: "The explanation below is an example of which constraint type? The value in the dept_no column of the EMPLOYEES table must match a value in the dept_no column in the DEPARTMENTS table.",
    answers: [
      "Column integrity",
      "User-defined integrity",
      "Referential integrity",
      "Entity integrity"
    ],
    correct: [2],
  },
  {
    question: "Two entities A and B have an optional (A) to Mandatory (B) One-to-One relationship. When they are transformed, the Foreign Key(s) is placed on:",
    answers: [
      "Both tables A and B get a new column and a Foreign Key.",
      "The table A",
      "The table B",
      "Nowhere, One-to-One relationships are not transformed."
    ],
    correct: [2],
  },
  {
    question: "All of the following would be instances of the entity ANIMAL SPECIES, except which one?",
    answers: [
      "Dog",
      "Elephant",
      "Bird",
      "Leaf"
    ],
    correct: [3],
  },
  {
    question: "During which phases of the System Development Life Cycle would you roll out the system to the users?",
    answers: [
      "Strategy and Analysis",
      "Design and Production",
      "Transition and Production",
      "Build and Transition"
    ],
    correct: [2],
  },
  {
    question: "Systems are always just rolled out as soon as the programming phase is finished. No further work is required once the development is finished. True or False?",
    answers: [
      "True",
      "False"
    ],
    correct: [1],
  }
];