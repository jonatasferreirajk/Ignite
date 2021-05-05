import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function CreateCourse(req: Request, res: Response){
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Mayk",
    duration: 10
  });

  CreateCourseService.execute({
    name: "React.JS",
    educator: "Diego",
    //duration: 10
  });

  return res.send();
}