"use server"
// @/lib/prisma ki jagah ye relative path daalein:
import prisma from "../lib/prisma"; 

export async function getAllSuperstars() {
  try {
    const superstars = await prisma.superstar.findMany({
      orderBy: { 
        name: 'asc' 
      }
    });
    return superstars;
  } catch (error) {
    console.error("Error fetching superstars:", error);
    return [];
  }
}