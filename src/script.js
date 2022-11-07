var svgContainer = document.getElementById('svgContainer');
bodymovin.loadAnimation({
wrapper: svgContainer,
animType: 'svg',
loop: true,
animationData: JSON.parse(animationData)
});