export default function showPriorityImg(priority) {
    let imgName;
    switch (priority) {
        case 'critical':
            imgName = 'priorityCritical.png';
            break;
        case 'major':
            imgName = 'priorityMajor.png';
            break;
        case 'normal':
            imgName = 'priorityNormal.png';
            break;
        case 'minor':
            imgName = 'priorityMinor.png';
            break;
        default:
            imgName = 'priorityUndefined.png';
            break;
    }
    return imgName
}