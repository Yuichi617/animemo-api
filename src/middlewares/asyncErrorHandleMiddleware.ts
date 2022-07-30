// 発生した例外をnext関数に渡すラップ関数
export default fn => 
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    }