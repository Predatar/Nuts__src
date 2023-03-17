document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.querySelectorAll('.order__body-cell-copy');

    const reportTitle = ['№ Заказа', 'Дата', 'Кол - во товаров', 'Статус', 'Стоимость'];

    copyBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            const row = elem.parentNode.parentNode.cells;
            const masCells = [];
            for (let i = 0; i < row.length - 1; i++) {
                masCells.push(row[i].innerHTML);
            }
            console.log(masCells);
            console.log(reportTitle);

            const text = `${reportTitle[0]}: ${masCells[0]}; ${reportTitle[1]}: ${masCells[1]}; ${reportTitle[2]}: ${masCells[2]}; ${reportTitle[3]}: ${masCells[3]}; ${reportTitle[4]}: ${masCells[4]}`;
            navigator.clipboard.writeText(text).then(() => {
                console.log('Text copied to clipboard');

                elem.classList.add('order__body-cell-copy_active');

                setTimeout(() => {
                    elem.classList.remove('order__body-cell-copy_active');
                }, 750);
            });
        });
    });
});
