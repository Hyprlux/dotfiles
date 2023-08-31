(function() {
    pl.extend(ke.ext.const.split_tests, {
        init: function() {
           
        }
    });

    // auto-init on include
    ke.import('lib.cohorts', () => {
        ke.ext.const.split_tests.init();
    });
})();