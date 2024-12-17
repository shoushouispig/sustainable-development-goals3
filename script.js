// 目标图标点击动画
const goalIcons = document.querySelectorAll('#goal-icons a img');

goalIcons.forEach(icon => {
  icon.addEventListener('mouseover', function() {
    icon.style.transform = 'scale(1.1)';
  });
  icon.addEventListener('mouseout', function() {
    icon.style.transform = 'scale(1)';
  });
});
