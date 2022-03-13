import { v4 as uuidv4 } from 'uuid';

export const initialValues = {
    id: uuidv4(),
    first_name: '',
    last_name: '',
    birth_date: '',
    nationality: '',
}