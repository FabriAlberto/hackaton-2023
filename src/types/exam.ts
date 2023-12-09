export interface Exam {
  examName: string;
  numberOfQuestions: number;
  numberOfOptions: number;
  difficulty: string;
  questions: Question[];
  multipleCorrect: boolean;
}

export interface Question {
  question: string;
  options: Option[];
  justification: string;
}

export interface Option {
  text: string;
  correct: boolean;
}
