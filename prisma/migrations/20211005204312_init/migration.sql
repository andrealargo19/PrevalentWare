-- CreateTable
CREATE TABLE "companies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commercial_name" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "id_type" TEXT NOT NULL,
    "id_number" INTEGER NOT NULL,
    "number_employees" INTEGER NOT NULL,
    "logo" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL
);
