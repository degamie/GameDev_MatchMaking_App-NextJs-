//WID(20/07/2026((Sarthak Mittal)DegamieSign)(jwtUtility)
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET!;
export function signToken(payload:{ 
    playerid:string;playername:string;
}){
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}


export function verifytoken(token:string) { 
    try{
        return jwt.verify(token,JWT_SECRET);
    }
    catch{
        return null;
    }

}


