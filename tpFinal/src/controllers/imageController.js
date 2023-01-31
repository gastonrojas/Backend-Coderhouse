const imageController =  {
    uploaded(req, res){
        if (!req.file) return res.sendStatus(406)
        const image_url = `http://localhost:8080/images/${req.file.filename}`
        res.status(200).json({image_url})
    }
}

export default imageController;