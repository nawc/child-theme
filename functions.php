<?php
/**
 * Meeting List changes to include new meeting types.
 */
if (function_exists('tsml_custom_types')) {
    tsml_custom_types(array(
        'HYB' => 'Online & In-Person',
        'IPO' => 'In-Person'
    ));
}
