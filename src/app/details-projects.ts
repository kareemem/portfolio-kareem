export interface DetailsProjects {
  id: number;
  name: string;
  title: string;
  liveLink: string;
  imgs: { src: string }[];
  overview: { desc: string }[];
  tools: { toolName: string }[];
  githubLink: string;

}
