const tags = document.querySelectorAll('body');

for (let tag of tags) {
    browseNode(tag);
}

/**
 * browseNode
 * @param node
 */
function browseNode(node)
{
    if (!node.hasChildNodes()) {
        return;
    }

    for (let child of node.childNodes) {

        if (Node.TEXT_NODE === child.nodeType) {

            child.textContent = child.textContent
                .replaceAll(/covid/gi, "💩")
                .replaceAll(/vaccin(er|ation)?s?\b/gi, "🍭")
                .replaceAll(/corona/gi, "🍺")
                .replaceAll(/virus/gi, "🦠")
                .replaceAll(/masques?/gi, "🤿")
            ;

            continue;
        }

        browseNode(child);
    }
}
