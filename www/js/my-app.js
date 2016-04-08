// Initialize your app
var myApp = new Framework7({
    material: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
});

var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    direction: 'vertical'
});

$$('.open-left-panel').on('click', function (e) {
    // 'left' position to open Left panel
    myApp.openPanel('left');
});

$$('.notification-callback').on('click', function () {
    myApp.addNotification({
        message: 'Halo, Ika',
        button: {
            text: 'Close',
            color: 'lightgreen'
        },
        onClose: function () {
            myApp.alert('Notification closed');
        }
    });
});


// Quote Content
var quote = [
        'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.', 
        'If you can dream it, you can do it', 
        'When you reach the end of your rope, tie a knot in it and hang on.', 
        'Aim for the moon. If you miss, you may hit a star'
    ];
var authors = [
        'Norman Vincent Peale', 
        'Walt Disney', 
        'Franklin D. Roosevelt', 
        'W. Clement Stone'
    ];
 
// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        // Random quote
        var ind = Math.floor(Math.random() * quote.length);
        var quotesword = quote[ind];
        // Random author
        var author = authors[ind];
        // List item html
        var itemHTML = '<div class="card">' +
                        '<div class="card-content">' +
                            '<div class="card-content-inner">' + quotesword + '</div>' +
                            '<div class="card-footer">' + author + '</div>' +
                        '</div>'+
                        '</div>';
        // Prepend new list element
        ptrContent.find('konten').prepend(itemHTML);
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 1000);
});
