export default interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    tags: string[];
    source: string | null;
    visit: string | null;
    id: number;
}