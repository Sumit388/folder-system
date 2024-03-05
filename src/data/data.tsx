export const fileStructure: FileNode = {
  name: "Root",
  createdAt: "23/03/2023",
  type: "folder",
  key: "0",
  parent: null,
  child: [
    {
      name: "Games",
      createdAt: "17/05/2022",
      type: "folder",
      key: "1",
      child: [
        {
          name: "Watch Dogs",
          createdAt: "29/12/2021",
          type: "folder",
          key: "2",
          child: [
            {
              name: "Invoice Details",
              createdAt: "05/09/2020",
              type: "file",
              key: "3",
              child: [],
              parent: null,
              link: "https://www.princexml.com/samples/invoice/invoicesample.pdf",
            },
          ],
          parent: null,
        },
        {
          name: "Mario",
          createdAt: "14/08/2022",
          type: "folder",
          key: "4",
          child: [
            {
              name: "TextBook",
              createdAt: "03/07/2021",
              type: "file",
              key: "5",
              child: [],
              parent: null,
              link: "https://css4.pub/2015/textbook/somatosensory.pdf",
            },
          ],
          parent: null,
        },
        {
          name: "Brochure",
          createdAt: "20/11/2020",
          type: "file",
          key: "6",
          child: [],
          parent: null,
          link: "https://www.princexml.com/samples/flyer/flyer.pdf",
        },
      ],
      parent: null,
    },
    {
      name: "Documents",
      createdAt: "09/04/2021",
      type: "folder",
      key: "7",
      child: [
        {
          name: "Induction Plan",
          createdAt: "13/10/2021",
          type: "folder",
          key: "8",
          child: [
            {
              name: "NewsLetter",
              createdAt: "22/06/2020",
              type: "file",
              key: "9",
              child: [],
              parent: null,
              link: "https://css4.pub/2017/newsletter/drylab.pdf",
            },
          ],
          parent: null,
        },
        {
          name: "Architecture",
          createdAt: "18/02/2022",
          type: "folder",
          key: "10",
          child: [
            {
              name: "Scientific Journal",
              createdAt: "11/09/2020",
              type: "file",
              key: "11",
              child: [],
              parent: null,
              link: "https://css4.pub/2015/usenix/example.pdf",
            },
          ],
          parent: null,
        },
        {
          name: "Banking",
          createdAt: "27/03/2021",
          type: "folder",
          key: "12",
          child: [
            {
              name: "Blue-sky printing",
              createdAt: "08/12/2021",
              type: "file",
              key: "13",
              child: [],
              parent: null,
              link: "https://www.princexml.com/howcome/2016/samples/magic8/index.pdf",
            },
          ],
          parent: null,
        },
      ],
      parent: null,
    },
    {
      name: "test3",
      createdAt: "04/08/2020",
      type: "folder",
      key: "14",
      child: [
        {
          name: "child1",
          createdAt: "19/06/2021",
          type: "folder",
          key: "15",
          child: [],
          parent: null,
        },
      ],
      parent: null,
    },
    {
      name: "Reconstructed Essay",
      createdAt: "30/01/2022",
      type: "file",
      key: "16",
      child: [],
      parent: null,
      link: "https://www.princexml.com/howcome/2016/samples//malthus/essay.pdf",
    },
    {
      name: "Product Catalogues",
      createdAt: "25/10/2020",
      type: "file",
      key: "17",
      child: [],
      parent: null,
      link: "https://www.princexml.com/samples/catalog/PrinceCatalogue.pdf",
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
