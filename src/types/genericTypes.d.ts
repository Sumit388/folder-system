type FileNode = {
  name: string;
  createdAt: string;
  type: string;
  key: string;
  child: FileNode[];
  parent: FileNode | null;
  link?: string;
};
