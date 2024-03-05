export const fileStructure: FileNode = {
  name: "Root",
  createdAt: "23/03/2023",
  type: "folder",
  key: "0",
  parent: null,
  child: [
    {
      name: "Games",
      createdAt: "23/03/2023",
      type: "folder",
      key: "1",
      child: [
        {
          name: "Watch Dogs",
          createdAt: "23/03/2023",
          type: "folder",
          key: "2",
          child: [
            {
              name: "file1",
              createdAt: "23/03/2023",
              type: "file",
              key: "10",
              child: [],
              parent: null,
            },
          ],
          parent: null,
        },
        {
          name: "Mario",
          createdAt: "23/03/2023",
          type: "folder",
          key: "3",
          child: [
            {
              name: "file1",
              createdAt: "23/03/2023",
              type: "file",
              key: "11",
              child: [],
              parent: null,
            },
          ],
          parent: null,
        },
      ],
      parent: null,
    },
    {
      name: "Documents",
      createdAt: "23/03/2023",
      type: "folder",
      key: "4",
      child: [
        {
          name: "Induction Plan",
          createdAt: "23/03/2023",
          type: "folder",
          key: "5",
          child: [
            {
              name: "file1",
              createdAt: "23/03/2023",
              type: "file",
              key: "12",
              child: [],
              parent: null,
            },
          ],
          parent: null,
        },
        {
          name: "Architecture",
          createdAt: "23/03/2023",
          type: "folder",
          key: "6",
          child: [
            {
              name: "file1",
              createdAt: "23/03/2023",
              type: "file",
              key: "13",
              child: [],
              parent: null,
            },
          ],
          parent: null,
        },
        {
          name: "Banking",
          createdAt: "23/03/2023",
          type: "folder",
          key: "7",
          child: [
            {
              name: "file1",
              createdAt: "23/03/2023",
              type: "file",
              key: "14",
              child: [],
              parent: null,
            },
          ],
          parent: null,
        },
      ],
      parent: null,
    },
    {
      name: "test3",
      createdAt: "23/03/2023",
      type: "folder",
      key: "8",
      child: [
        {
          name: "child1",
          createdAt: "23/03/2023",
          type: "folder",
          key: "9",
          child: [],
          parent: null,
        },
      ],
      parent: null,
    },
  ],
};

export const addParentPointers = (
  node: FileNode,
  parent: FileNode | null = null
) => {
  node.parent = parent; // Add parent pointer to current node
  if (node.child && node.child.length > 0) {
    node.child.forEach((childNode: FileNode) => {
      addParentPointers(childNode, node); // Pass current node as parent for its children
    });
  }
};
