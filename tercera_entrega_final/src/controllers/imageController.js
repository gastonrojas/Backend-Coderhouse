const imageController =  {
    uploaded(req, res){
        if (req.file) res.status(200).json(req.file)
        else res.sendStatus(406)
    }
}

export default imageController;