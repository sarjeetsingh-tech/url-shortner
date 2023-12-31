const Url = require("../models/url")
const shortid = require("shortid");
const validator = require("validator");

const access = async (req, res) => {
    const id = req.params.id;
    const url = await Url.findOne({ shortURLKey: id });
    if (url) {
        const count = url.clickCount;
        await Url.findByIdAndUpdate(url._id, {
            $set: {
                clickCount: count + 1,
            },
            $push: {
                clickTimestamps: new Date(),
            },
        });
        res.redirect(url.originalURL);
    }
    else {
        res.json("invalid url");
    }
}

const createShortenUrl = async (req, res) => {
    console.log(req.body);
    const { originalURL } = req.body;

    if (validator.isURL(originalURL)) {
        try {
            let shortURLKey;
            let url = await Url.findOne({ originalURL });
            if (url) {
                shortURLKey = url.shortURLKey;
            }
            else {
                shortURLKey = shortid.generate();
                url = new Url({
                    originalURL,
                    shortURLKey,
                    createdAt: new Date(),
                    clickCount: 0,
                });
                await url.save();
            }
            const allUrls = await Url.find({});
            res.render("home.ejs", { id: shortURLKey, allUrls: allUrls });
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        res.json("Not a valid URL");
    }
}


const details = async (req, res) => {
    const id = req.params.id;
    const url = await Url.findOne({ shortURLKey: id });
    if (url) {
        res.json(url);
    } else {
        json.send("invalid url");
    }
}


module.exports = { access, createShortenUrl, details }