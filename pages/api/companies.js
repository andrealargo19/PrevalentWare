import { PrismaClient, Prisma } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async (req, res) => {
 if (req.method !== 'PUT') {
   return res.status(405).json({ message: 'Method not allowed' });
 }
 try {
   const updatedCompanies = await prisma.companies.update({
       where: {
         id: req.body.id,
       },
       data: {
         status: req.body.value,
       },
     })
   res.status(200).json(updatedCompanies);
 } catch (err) {
   res.status(400).json({ message: 'Something went wrong' });
 }
};
