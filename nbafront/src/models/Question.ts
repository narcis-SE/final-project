export interface Question {
    _id?: string;
    question: string;
    answer: Answer[];
    hint: string;
    difficulty: string
  }

  export interface Answer {
    name: string;
    image: string;
};