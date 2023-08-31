/**
 * Created by chernikovalexey on 18/09/17.
 */

 (function (undefined) {

    pl.extend(ke.ext.mate_events, {
        send: (event_name, callback) => {
            const analytics_client_id = ke.ext.util.storageUtil.getVal('analytics_client_id');

            // doesn't make much sense to send a request
            // it'd return 400 anyways
            if (!analytics_client_id) {
                if (typeof callback === 'function') {
                    callback();
                }

                return;
            }

            $.ajax({
                url: 'https://' + ke.syncServer + '/track_event',
                type: 'POST',
                dataType: 'JSON',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    u_id: analytics_client_id,
                    e_cat: ke.PLATFORM_CODE,
                    e_action: event_name,
                    e_label: event_name
                }),
                success: (d) => {
                    console.log(d);

                    if (typeof callback === 'function') {
                        callback();
                    }
                },
                error: (e) => {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
        }
    });

})();