const bigLargeContent = (
    <h3 className="text-center">
        <strong>Example: </strong> 
        这个太<strong>大</strong>了
    </h3>
)

const manyMuchContent = (
    <h3 className="text-center">
        <strong>Example: </strong> 
        我已经有很<strong>多</strong>了
    </h3>
)

export const MaterialUiTableData = [
    {
        "chinese_characters": "大",
        "pinyin": "dà",
        "definition": "big, large",
        "type": "adjective",
        "hsk_level": 1,
        "content": bigLargeContent
    },
    {
        "chinese_characters": "多",
        "pinyin": "duō",
        "definition": "many, much",
        "type": "adjective",
        "hsk_level": 1,
        "content": manyMuchContent
    },
    {
        "chinese_characters": "高兴",
        "pinyin": "gāo xìng",
        "definition": "happy",
        "type": "adjective",
        "hsk_level": 1
    },
    {
        "chinese_characters": "好",
        "pinyin": "hǎo",
        "definition": "good, nice",
        "type": "adjective",
        "hsk_level": 1
    }
]

export default MaterialUiTableData