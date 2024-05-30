// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  const browse = (req, res) => {
    res.json( categories);
  };

  const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
  
  
   

     const parogram = categories.find((p) => p.id ===parsedId);

     if (parogram != null) {
      res.json(parogram);

     } else{
      res.sendStatuts(404);
     }
    };

  

  module.exports = { browse, read };