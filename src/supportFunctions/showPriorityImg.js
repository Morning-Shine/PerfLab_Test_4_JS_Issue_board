export default function showPriorityImg(priority) {
    let imgName;
    switch (priority) {
        case 'critical':
            imgName = 'images/priorityCritical.png';
            break;
        case 'major':
            imgName = 'images/priorityMajor.png';
            break;
        case 'normal':
            imgName = 'images/priorityNormal.png';
            break;
        case 'minor':
            imgName = 'images/priorityMinor.png';
            break;
        default:
            imgName = 'images/priorityUndefined.png';
            break;
    }
    return imgName
}